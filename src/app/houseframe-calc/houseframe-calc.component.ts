import {AfterContentInit, Component, DoCheck, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MaterialsService} from "../services/materials.service";
import {Material} from "../entity/Material";
import {ResultsService} from "../services/results.service";
import {AuthService} from "../services/auth.service";
import {CalculationService} from "../services/calculation.service";
import {Client} from "../entity/Client";
import {CookieService} from "ngx-cookie-service";
import {Frame} from "../entity/Frame";
import {Results} from "../entity/Results";
import { browserRefresh } from '../app.component';

@Component({
    selector: 'app-houseframe-calc',
    templateUrl: './houseframe-calc.component.html',
    styleUrls: ['./houseframe-calc.component.scss']
})
export class HouseframeCalcComponent implements OnInit, AfterContentInit {

    calcId: number = this.calculationService.getCurrentId()
    clientId: number
    calcNumber: string
    client: Client
    formFrame: any
    newTokens: any
    hidden: boolean[] = []
    considerInnerWallsCalc: boolean[] = []
    considerOpenings: boolean[] = []
    considerOverlaps: boolean[] = []
    material: Material[] = []
    thicknessArray: Array<number> = [0.1, 0.15, 0.2, 0.25]
    heightV: any
    weightV: any
    numOfFl: any
    a: number
    b: number
    c: number
    calculatorToggle: boolean = false;
    editForm: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private materials: MaterialsService,
        private resultsService: ResultsService,
        private calculationService: CalculationService,
        private authService: AuthService,
        private cookieService: CookieService
    ) {
    }

    ngOnInit() {
        this.client = new Client()
        this.client = JSON.parse(this.cookieService.get('client'))
        this.calcNumber = this.cookieService.get('calcNumber')
        this.route.params.subscribe({
            next: (params: Params) => {
                this.clientId = +params['id']
            },
            error: (err) => {
                if (err.status == 403) {
                    this.authService.refreshToken()
                }
                console.log('error: ', err)
            }
        })

        if (JSON.parse(this.cookieService.get('editFlag'))) {
            console.log(this.cookieService.get('calcNumber'))
            console.log(JSON.parse(this.cookieService.get('editFlag')))
            this.resultsService.clearResults()
            this.resultsService.getResults(this.cookieService.get('calcNumber')).subscribe({
                next: (msg) => {
                    for (let i = 0; i < JSON.parse(String(msg.body))[0].frame.numberOfFloors; i++) {
                        this.resultsService.setResults(JSON.parse(String(msg.body)).filter((res:Results) => res.frame.floorNumber == i+1))
                    }
                    let floorNumber: any[] = []
                    let id: number[] = []
                    this.editForm = this.resultsService.getResultsArray()
                    console.log(this.editForm)
                    for (let i = 0; i < this.editForm.length; i++) {
                        console.log(JSON.stringify(this.editForm[i][i].frame))
                        id.push(this.editForm[i][i].frame.id)
                        floorNumber.push({
                            floorHeight: this.editForm[i][i].frame.floorHeight,
                            outerWallPerimeter: this.editForm[i][i].frame.outerWallPerimeter,
                            baseArea: this.editForm[i][i].frame.baseArea,
                            externalWallThickness: this.editForm[i][i].frame.externalWallThickness,
                            internalWallLength: this.editForm[i][i].frame.internalWallLength,
                            internalWallThickness: this.editForm[i][i].frame.internalWallThickness,

                            osbexternalWall: this.editForm[i][i].frame.osbexternalWall,
                            steamWaterproofingExternalWall: this.editForm[i][i].frame.steamWaterproofingExternalWall,
                            windscreenExternalWall: this.editForm[i][i].frame.windscreenExternalWall,
                            insulationExternalWall: this.editForm[i][i].frame.insulationExternalWall,

                            osbinternalWall: this.editForm[i][i].frame.osbinternalWall,

                            apertures: this.editForm[i][i].frame.apertures,

                            overlapThickness: this.editForm[i][i].frame.overlapThickness,
                            osbthickness: this.editForm[i][i].frame.osbthickness,
                            steamWaterproofingThickness: this.editForm[i][i].frame.steamWaterproofingThickness,
                            windscreenProtectionThickness: this.editForm[i][i].frame.windscreenProtectionThickness,
                            insulationThickness: this.editForm[i][i].frame.insulationThickness
                        })
                    }
                    let finalEditForm = {
                        ...{
                            id: id,
                            numberOfFloors: this.editForm[0][0].frame.numberOfFloors,
                            floorNumber: floorNumber
                        }
                    }
                    console.log('finalEdit', finalEditForm)
                    this.resultsService.setEditForm(finalEditForm)
                },
                error: (err) => {
                    console.log('error1', err)
                    if (err.status == 403) {
                        this.authService.refreshToken()
                    }
                },
                complete: () => {
                }
            })
        }

        else {
            this.formFrame = this.fb.group({
                id: [null],
                numberOfFloors: [1, [Validators.required, Validators.min(1), Validators.max(20)]],
                floorNumber: this.fb.array([
                    this.fb.group({
                        floorHeight: [null, [Validators.required, Validators.max(3)]],
                        outerWallPerimeter: [null, Validators.required],
                        baseArea: [null, Validators.required],
                        externalWallThickness: ['', Validators.required],
                        internalWallLength: ['', Validators.required],
                        internalWallThickness: ['', Validators.required],

                        osbexternalWall: [''],
                        steamWaterproofingExternalWall: [''],
                        windscreenExternalWall: [''],
                        insulationExternalWall: [''],

                        osbinternalWall: [''],

                        apertures: this.fb.array([
                            this.fb.group({
                                id: this.fb.group({
                                    frameId: [null],
                                    apertureId: [null],
                                }),
                                amount: [''],
                                aperture: this.fb.group({
                                    id: [null],
                                    type: [''],
                                    height: [null],
                                    weight: [null]
                                }, {validator: this.heightWeight('height', 'weight')})
                            })
                        ]),

                        overlapThickness: [0],
                        osbthickness: [''],
                        steamWaterproofingThickness: [''],
                        windscreenProtectionThickness: [''],
                        insulationThickness: ['']
                    }, {validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                            this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
                        ]})
                ])
            }, {validators: this.setNumOfFlrs('numberOfFloors')})
        }



        this.hidden.length = this.numberOfFloors.value
        this.considerInnerWallsCalc.length = this.numberOfFloors.value
        this.considerOpenings.length = this.numberOfFloors.value
        this.considerOverlaps.length = this.numberOfFloors.value
        this.hidden.fill(false)
        this.considerInnerWallsCalc.fill(false)
        this.considerOpenings.fill(false)
        this.considerOverlaps.fill(false)

        this.materials.getMaterials().subscribe({
            next: (msg) => {
                console.log(msg.body)
                this.material = JSON.parse(String(msg.body))
                this.materials.setMaterialArray(JSON.parse(String(msg.body)))
            },
            error: (err) => {
                console.log('ERROR', err)
                if (err.status == 403) {
                    this.authService.refreshToken()
                }
            },
            complete: () => {
            }
        })
    }

    ngAfterContentInit() {
        this.materials.getMaterials().subscribe({
            next: (msg) => {
                this.materials.setMaterialArray(JSON.parse(String(msg.body)))
            },
            error: (err) => {
                console.log('ERROR', err)
                if (err.status == 403) {
                    this.authService.refreshToken()
                }
            },
            complete: () => {
            }
        })
        // if (browserRefresh)
        //     this.router.navigate(['/clientspage', this.clientId])
        if (JSON.parse(this.cookieService.get('editFlag'))) {
            console.log('getFromRes', this.resultsService.getEditForm().floorNumber[0].osbexternalWall)
            console.log('getFromRes', this.resultsService.getEditForm().floorNumber[0].steamWaterproofingExternalWall)
            this.formFrame = this.fb.group({
                id: [this.resultsService.getEditForm().id[0]],
                numberOfFloors: [this.editForm[0][0].frame.numberOfFloors, [Validators.required, Validators.min(1), Validators.max(20)]],
                floorNumber: this.fb.array([
                    this.fb.group({
                        floorHeight: [this.resultsService.getEditForm().floorNumber[0].floorHeight, [Validators.required, Validators.max(3)]],
                        outerWallPerimeter: [this.resultsService.getEditForm().floorNumber[0].outerWallPerimeter, Validators.required],
                        baseArea: [this.resultsService.getEditForm().floorNumber[0].baseArea, Validators.required],
                        externalWallThickness: [this.resultsService.getEditForm().floorNumber[0].externalWallThickness, Validators.required],
                        internalWallLength: [this.resultsService.getEditForm().floorNumber[0].internalWallLength, Validators.required],
                        internalWallThickness: [this.resultsService.getEditForm().floorNumber[0].internalWallThickness, Validators.required],
                        osbexternalWall: [this.resultsService.getEditForm().floorNumber[0].osbexternalWall],
                        steamWaterproofingExternalWall: [this.resultsService.getEditForm().floorNumber[0].steamWaterproofingExternalWall],
                        windscreenExternalWall: [this.resultsService.getEditForm().floorNumber[0].windscreenExternalWall],
                        insulationExternalWall: [this.resultsService.getEditForm().floorNumber[0].insulationExternalWall],
                        osbinternalWall: [this.resultsService.getEditForm().floorNumber[0].osbinternalWall],
                        apertures: this.fb.array([
                            this.fb.group({
                                id: this.fb.group({
                                    frameId: [this.resultsService.getEditForm().floorNumber[0].apertures[0].id.frameId],
                                    apertureId: [this.resultsService.getEditForm().floorNumber[0].apertures[0].id.apertureId],
                                }),
                                amount: [this.resultsService.getEditForm().floorNumber[0].apertures[0].amount],
                                aperture: this.fb.group({
                                    id: [this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.id],
                                    type: [this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.type],
                                    height: [this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.height],
                                    weight: [this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.weight]
                                }, {validator: this.heightWeight('height', 'weight')})
                            })
                        ]),

                        overlapThickness: [this.resultsService.getEditForm().floorNumber[0].overlapThickness],
                        osbthickness: [this.resultsService.getEditForm().floorNumber[0].osbthickness],
                        steamWaterproofingThickness: [this.resultsService.getEditForm().floorNumber[0].steamWaterproofingThickness],
                        windscreenProtectionThickness: [this.resultsService.getEditForm().floorNumber[0].windscreenProtectionThickness],
                        insulationThickness: [this.resultsService.getEditForm().floorNumber[0].insulationThickness]
                    }, {
                        validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                            this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
                        ]
                    })
                ])
            }, {validators: this.setNumOfFlrs('numberOfFloors')})
            if (this.resultsService.getEditForm().floorNumber[0].apertures.length > 1) {
                for (let i = 1; i < this.resultsService.getEditForm().floorNumber[0].apertures.length; i++) {
                    this.addApertures(0, this.resultsService.getEditForm().floorNumber[0].apertures[i])
                }
            }
            if (this.resultsService.getEditForm().floorNumber[0].osbinternalWall)
                this.considerInnerWallsCalc[0] = true
            if (this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.height > 0)
                this.considerOpenings[0] = true
            if (this.resultsService.getEditForm().floorNumber[0].overlapThickness)
                this.considerOverlaps[0] = true
            if (this.resultsService.getEditForm().floorNumber.length > 1)
                this.addFloor(this.resultsService.getEditForm().floorNumber)
        }
    }

    heightWeight(heightV: string, weightV: string) {
        return (group: FormGroup) => {
            this.heightV = group.controls[heightV]
            this.weightV = group.controls[weightV]
        }
    }

    setNumOfFlrs(num: string) {
        return (group: FormGroup) => {
            this.numOfFl = group.controls[num].value
        }
    }

    setEditForm(results: any) {
        this.editForm = results
    }

    getMaterialArr() {
        return this.material
    }

    getEditForm() {
        return this.editForm
    }

    matchValidator(floorHeight: string, internalWallLength: string, heightWidth: string) {
        return (group: FormGroup) => {
            let floorHeightInput = group.controls[floorHeight],
                internalWallLengthInput = group.controls[internalWallLength],
                heightWidthInput = group.controls[heightWidth]
            if (Number(this.heightV.value) > Number(floorHeightInput.value)) {
                return this.heightV.setErrors({mismatchHeight: true})
            }
            else {
                return this.heightV.setErrors(null);
            }
        }
    }
    matchValidator2(floorHeight: string, internalWallLength: string, heightWidth: string) {
        return (group: FormGroup) => {
            let floorHeightInput = group.controls[floorHeight],
                internalWallLengthInput = group.controls[internalWallLength],
                heightWidthInput = group.controls[heightWidth]
            if (Number(this.weightV.value) > Number(internalWallLengthInput.value)) {
                return this.weightV.setErrors({mismatchWidth: true})
            }
            else {
                return this.weightV.setErrors(null);
            }
        }
    }

    get numberOfFloors() {
        return (this.formFrame.controls["numberOfFloors"] as FormControl)
    }

    get floorNumber() {
        return this.formFrame.controls["floorNumber"] as FormArray
    }

    getTel() {
        return String(this.client.telephoneNumber)
    }

    getClient() {
        return this.client
    }

    apertures(index: number) {
        return this.formFrame.controls["floorNumber"].controls[index].controls['apertures'] as FormArray
    }

    getMaterial(index: number) {
        return this.materials.getMaterialArray()[index]
    }
    getOSB() {
        return this.materials.getMaterialArray().filter(type => type.materialType === 'OSB')
    }
    // formFrame.controls['floorNumber'].controls[i].controls['externalWallThickness'].value

    getInsulation(thickness: any) {
        if (thickness == 'all')
            return this.materials.getMaterialArray().filter(type => type.materialType === 'Утеплитель')
        return this.materials.getMaterialArray()
            .filter(type => type.materialType === 'Утеплитель')
            .filter(thisThickness => thisThickness.materialCharacteristic.thickness == thickness)
    }
    getWindscreen() {
        return this.materials.getMaterialArray().filter(type => type.materialType === 'Ветрозащита')
    }
    getSteamWaterproofing() {
        return this.materials.getMaterialArray().filter(type => type.materialType === 'Пароизоляция')
    }

    getThicknessArray(thickness: any) {
        if (thickness == 'all')
            return this.thicknessArray
        if (Number(thickness))
            return this.thicknessArray.filter(thknss => thknss == thickness)
        let thkn: any = '0.'
        if (String(thickness)) {
            for (let i = 0; i < thickness.length; i++) {
                if (Number(thickness[i]))
                    thkn += thickness[i]
            }
            thkn = Number(thkn)
        }
        return this.thicknessArray.filter(thknss => thknss == thkn)
    }

    addFloor(floorInfo?: any) {
        if (!floorInfo) {
            let floorForm = this.fb.group({
                floorHeight: [null, [Validators.required, Validators.max(3)]],
                outerWallPerimeter: [null, Validators.required],
                baseArea: [null, Validators.required],
                externalWallThickness: ['', Validators.required],
                internalWallLength: ['', Validators.required],
                internalWallThickness: ['', Validators.required],

                osbexternalWall: [''],
                steamWaterproofingExternalWall: [''],
                windscreenExternalWall: [''],
                insulationExternalWall: [''],

                osbinternalWall: [''],

                apertures: this.fb.array([
                    this.fb.group({
                        id: this.fb.group({
                            frameId: [null],
                            apertureId: [null],
                        }),
                        amount: [''],
                        aperture: this.fb.group({
                            id: [null],
                            type: [''],
                            height: [null],
                            weight: [null]
                        }, {validator: this.heightWeight('height', 'weight')})
                    })
                ]),

                overlapThickness: [0],
                osbthickness: [''],
                steamWaterproofingThickness: [''],
                windscreenProtectionThickness: [''],
                insulationThickness: ['']
                }, {validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                    this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
            ]})
            if (this.numberOfFloors.valid) {
                if (this.numberOfFloors.value > this.floorNumber.length) {
                    this.hidden.length = this.numberOfFloors.value
                    this.considerInnerWallsCalc.length = this.numberOfFloors.value
                    this.considerOpenings.length = this.numberOfFloors.value
                    this.considerOverlaps.length = this.numberOfFloors.value
                    for (let i = this.floorNumber.length; i < this.numberOfFloors.value; i++) {
                        this.floorNumber.push(floorForm)
                        this.hidden[i] = false
                        this.considerInnerWallsCalc[i] = false
                        this.considerOpenings[i] = false
                        this.considerOverlaps[i] = false
                    }
                } else {
                    this.hidden.length = this.numberOfFloors.value
                    this.considerInnerWallsCalc.length = this.numberOfFloors.value
                    this.considerOpenings.length = this.numberOfFloors.value
                    this.considerOverlaps.length = this.numberOfFloors.value
                    for (let i = this.floorNumber.length; i > this.numberOfFloors.value; i--) {
                        this.deleteFloor(i - 1)
                    }
                }
            }
        }

        if (floorInfo) {
            this.hidden.length = this.numberOfFloors.value
            this.considerInnerWallsCalc.length = this.numberOfFloors.value
            this.considerOpenings.length = this.numberOfFloors.value
            this.considerOverlaps.length = this.numberOfFloors.value
            for (let i = 1; i < floorInfo.length; i++) {
                let floorForm = this.fb.group({
                    floorHeight: [floorInfo[i].floorHeight, [Validators.required, Validators.max(3)]],
                    outerWallPerimeter: [floorInfo[i].outerWallPerimeter, Validators.required],
                    baseArea: [floorInfo[i].baseArea, Validators.required],
                    externalWallThickness: [floorInfo[i].externalWallThickness, Validators.required],
                    internalWallLength: [floorInfo[i].internalWallLength, Validators.required],
                    internalWallThickness: [floorInfo[i].internalWallThickness, Validators.required],

                    osbexternalWall: [floorInfo[i].osbexternalWall],
                    steamWaterproofingExternalWall: [floorInfo[i].steamWaterproofingExternalWall],
                    windscreenExternalWall: [floorInfo[i].windscreenExternalWall],
                    insulationExternalWall: [floorInfo[i].insulationExternalWall],

                    osbinternalWall: [floorInfo[i].osbinternalWall],

                    apertures: this.fb.array([
                        this.fb.group({
                            id: this.fb.group({
                                frameId: [floorInfo[i].apertures[0].id.frameId],
                                apertureId: [floorInfo[i].apertures[0].id.apertureId],
                            }),
                            amount: [floorInfo[i].apertures[0].amount],
                            aperture: this.fb.group({
                                id: [floorInfo[i].apertures[0].aperture.id],
                                type: [floorInfo[i].apertures[0].aperture.type],
                                height: [floorInfo[i].apertures[0].aperture.height],
                                weight: [floorInfo[i].apertures[0].aperture.weight]
                            }, {validator: this.heightWeight('height', 'weight')})
                        })
                    ]),

                    overlapThickness: [floorInfo[i].overlapThickness],
                    osbthickness: [floorInfo[i].osbthickness],
                    steamWaterproofingThickness: [floorInfo[i].steamWaterproofingThickness],
                    windscreenProtectionThickness: [floorInfo[i].windscreenProtectionThickness],
                    insulationThickness: [floorInfo[i].insulationThickness]
                }, {validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                        this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
                    ]})
                this.floorNumber.push(floorForm)
                if (floorInfo[i].apertures.length > 1) {
                    for (let k = 1; k < floorInfo[i].apertures.length; k++) {
                        this.addApertures(i, floorInfo[i].apertures[k])
                    }
                }
                this.hidden[i] = false
                if (this.resultsService.getEditForm().floorNumber[i].osbinternalWall)
                    this.considerInnerWallsCalc[i] = true
                if (this.resultsService.getEditForm().floorNumber[0].apertures[0].aperture.height > 0)
                    this.considerOpenings[i] = true
                if (this.resultsService.getEditForm().floorNumber[i].overlapThickness ||
                    this.resultsService.getEditForm().floorNumber[i].osbthickness ||
                    this.resultsService.getEditForm().floorNumber[i].steamWaterproofingThickness ||
                    this.resultsService.getEditForm().floorNumber[i].windscreenProtectionThickness ||
                    this.resultsService.getEditForm().floorNumber[i].insulationThickness)
                    this.considerOverlaps[i] = true
            }
        }

    }

    deleteFloor(floorIndex: number) {
        for (let i = this.apertures(floorIndex).length; i > 1; i--) {
            this.deleteApertures(floorIndex, i - 1)
        }
        this.floorNumber.removeAt(floorIndex)
        this.hidden.length = this.numberOfFloors.value
        this.considerInnerWallsCalc.length = this.numberOfFloors.value
        this.considerOpenings.length = this.numberOfFloors.value
        this.considerOverlaps.length = this.numberOfFloors.value
    }

    addApertures(index: number, apertureExt?: any) {
        if (!apertureExt) {
            let apertures = this.fb.group({
                id: this.fb.group({
                    frameId: [null],
                    apertureId: [null],
                }),
                amount: [''],
                aperture: this.fb.group({
                    id: [null],
                    type: [''],
                    height: [null],
                    weight: [null]
                }, {validator: this.heightWeight('height', 'weight')})
            })
            this.apertures(index).push(apertures)
        }
        if (apertureExt) {
            let apertures = this.fb.group({
                id: this.fb.group({
                    frameId: [apertureExt.id.frameId],
                    apertureId: [apertureExt.id.apertureId],
                }),
                amount: [apertureExt.amount],
                aperture: this.fb.group({
                    id: [apertureExt.aperture.id],
                    type: [apertureExt.aperture.type],
                    height: [apertureExt.aperture.height],
                    weight: [apertureExt.aperture.weight]
                }, {validator: this.heightWeight('height', 'weight')})
            })
            this.apertures(index).push(apertures)
        }
    }

    deleteApertures(index: number, indexAperture: number) {
        this.apertures(index).removeAt(indexAperture)
    }

    clearCalculation() {
        for (let i = this.apertures(0).length; i > 1; i--) {
            this.deleteApertures(0, i - 1)
        }
        for (let i = this.floorNumber.length; i > 1; i--) {
            this.deleteFloor(i - 1)
        }
        this.hidden.length = this.numberOfFloors.value
        this.considerInnerWallsCalc.length = this.numberOfFloors.value
        this.considerOpenings.length = this.numberOfFloors.value
        this.considerOverlaps.length = this.numberOfFloors.value
        this.hidden.fill(false)
        this.considerInnerWallsCalc.fill(false)
        this.considerOpenings.fill(false)
        this.considerOverlaps.fill(false)
        this.formFrame.reset()
        this.formFrame.controls['numberOfFloors'].value = 1
    }

    clearOSBInternal(index: number) {
        this.formFrame.controls["floorNumber"].controls[index].controls['osbinternalWall'].reset('')
    }

    clearApertures(index: number) {
        for (let i = this.apertures(index).length; i > 1; i--) {
            this.deleteApertures(index, i - 1)
        }
        this.formFrame.controls["floorNumber"].controls[index].controls['apertures'].reset('')
    }

    clearOverlaps(index: number) {
        this.formFrame.controls["floorNumber"].controls[index].controls['overlapThickness'].reset('')
        this.formFrame.controls["floorNumber"].controls[index].controls['osbthickness'].reset('')
        this.formFrame.controls["floorNumber"].controls[index].controls['steamWaterproofingThickness'].reset('')
        this.formFrame.controls["floorNumber"].controls[index].controls['windscreenProtectionThickness'].reset('')
        this.formFrame.controls["floorNumber"].controls[index].controls['insulationThickness'].reset('')
    }


    hide(i: number) {
        this.hidden[i] = true
    }

    decAmountFloor() {
        if (this.formFrame.controls['numberOfFloors'].value > 1) {
            this.hidden.length = this.numberOfFloors.value
            this.considerInnerWallsCalc.length = this.numberOfFloors.value
            this.considerOpenings.length = this.numberOfFloors.value
            this.considerOverlaps.length = this.numberOfFloors.value
            this.deleteFloor(--this.formFrame.controls['numberOfFloors'].value)
        }
    }

    incAmountFloor() {
        const floorForm = this.fb.group({
            floorHeight: [null, [Validators.required, Validators.max(3)]],
            outerWallPerimeter: [null, Validators.required],
            baseArea: [null, Validators.required],
            externalWallThickness: ['', Validators.required],
            internalWallLength: ['', Validators.required],
            internalWallThickness: ['', Validators.required],

            osbexternalWall: [''],
            steamWaterproofingExternalWall: [''],
            windscreenExternalWall: [''],
            insulationExternalWall: [''],

            osbinternalWall: [''],

            apertures: this.fb.array([
                this.fb.group({
                    id: this.fb.group({
                        frameId: [null],
                        apertureId: [null],
                    }),
                    amount: [''],
                    aperture: this.fb.group({
                        id: [null],
                        type: [''],
                        height: [null],
                        weight: [null]
                    }, {validator: this.heightWeight('height', 'weight')})
                })
            ]),

            overlapThickness: [0],
            osbthickness: [''],
            steamWaterproofingThickness: [''],
            windscreenProtectionThickness: [''],
            insulationThickness: ['']
            }, {validator: [this.matchValidator('floorHeight', 'internalWallLength', 'apertures'),
                this.matchValidator2('floorHeight', 'internalWallLength', 'apertures')
        ]})
        this.formFrame.controls['numberOfFloors'].value++;
        this.hidden.length = this.numberOfFloors.value
        this.considerInnerWallsCalc.length = this.numberOfFloors.value
        this.considerOpenings.length = this.numberOfFloors.value
        this.considerOverlaps.length = this.numberOfFloors.value
        this.hidden[this.numberOfFloors.value - 1] = false
        this.considerInnerWallsCalc[this.numberOfFloors.value - 1] = false
        this.considerOpenings[this.numberOfFloors.value - 1] = false
        this.considerOverlaps[this.numberOfFloors.value - 1] = false
        this.floorNumber.push(floorForm)
    }

    decreaseVal() {
        this.formFrame.controls['numberOfFloors'].value--
    }

    calculate(oper:string) {
        switch (oper) {
            case '*':
                this.c = this.a * this.b
                break
            case '/':
                this.c = this.a / this.b
                break
            case '+':
                this.c = +this.a + +this.b
                break
            case '-':
                this.c = this.a - this.b
                break
        }
    }

    setEditFlag() {
        this.cookieService.set('editFlag', JSON.stringify(false))
    }

    submit() {
        if(this.formFrame.valid) {
            if (JSON.parse(this.cookieService.get('editFlag'))) {
                const editedData = {...this.formFrame.value}
                let jsonEditedComposition: Frame[] = []
                for (let i = 0; i < editedData.floorNumber.length; i++) {
                    jsonEditedComposition[i] = {
                        ...{
                            id: editedData.id,
                            numberOfFloors: editedData.numberOfFloors,
                            floorNumber: i + 1
                        },
                        ...editedData.floorNumber[i]
                    }
                    // console.log(JSON.stringify(jsonComposition[i]))
                    this.resultsService.updateFrame(jsonEditedComposition[i], this.calcNumber).subscribe({
                        next: (msg) => {
                            console.log(msg)
                        },
                        error: (err) => {
                            console.log('error', err)
                        },
                        complete: () => {}
                    })
                }
                setTimeout(() => {
                    this.clearCalculation()
                    this.router.navigate(['/clientspage', this.clientId])
                }, 300)
            }
            else {
                const newFrameData = {...this.formFrame.value}
                let jsonComposition: Frame[] = []
                for (let i = 0; i < newFrameData.floorNumber.length; i++) {
                    jsonComposition[i] = {
                        ...{
                            id: newFrameData.id,
                            numberOfFloors: newFrameData.numberOfFloors,
                            floorNumber: i + 1
                        },
                        ...newFrameData.floorNumber[i]
                    }
                    // console.log(JSON.stringify(jsonComposition[i]))
                    this.resultsService.addFrame(jsonComposition[i], this.calcNumber).subscribe({
                        next: (msg) => {
                            console.log('msgfromSerik',msg)
                        },
                        error: (err) => {
                            console.log('error', err)
                        },
                        complete: () => {}
                    })
                }
                setTimeout(() => {
                    this.clearCalculation()
                    this.router.navigate(['/clientspage', this.clientId])
                }, 300)
            }

        }

    }

    showAF() {
        console.log(this.cookieService.get('calcNumber'))
    }
}