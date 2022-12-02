import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-houseframe-calc',
  templateUrl: './houseframe-calc.component.html',
  styleUrls: ['./houseframe-calc.component.scss']
})
export class HouseframeCalcComponent implements OnInit {

  clientId: number
  formFrame: any
  newTokens: any
  hidden: boolean[] = []
  considerInnerWallsCalc: boolean[] = []
  considerOpenings: boolean[] = []
  considerOverlaps: boolean[] = []

  constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.clientId = +params['id']
      },
      error: (err) => {
        console.log('error: ', err)
      }
    })

    this.formFrame = this.fb.group({
      id: [null],
      results_id: [null],
      amount_floor: [1, Validators.compose([Validators.required, Validators.min(1), Validators.max(20)])],
      floor_number: this.fb.array([
        this.fb.group({
          floor_height: ['', Validators.required],
          perimeter_of_external_walls: ['', Validators.required],
          base_area: ['', Validators.required],
          external_wall_thickness: ['', Validators.required],
          internal_wall_length: ['', Validators.required],
          internal_wall_thickness: ['', Validators.required],

          OSB_external_wall: ['', Validators.required],
          steam_waterproofing_external_wall: ['', Validators.required],
          windscreen_external_wall: ['', Validators.required],
          insulation_external_wall: ['', Validators.required],

          OSB_internal_wall: ['', Validators.required],

          apertures: this.fb.array([
            this.fb.group({
              id: this.fb.group({
                frameId: [null],
                apertureId: [null],
              }),
              amount: ['', Validators.required],
              aperture: this.fb.group({
                id: [null],
                type: ['', Validators.required],
                height: ['', Validators.required],
                width: ['', Validators.required]
              })
            })
          ]),

          overlap_thickness: [null, Validators.required],
          OSB_thickness: ['', Validators.required],
          steam_waterproofing_thickness: ['', Validators.required],
          windscreen_thickness: ['', Validators.required],
          insulation_thickness: ['', Validators.required]
        })
      ])
    })

    this.hidden.length = this.amount_floor.value
    this.considerInnerWallsCalc.length = this.amount_floor.value
    this.considerOpenings.length = this.amount_floor.value
    this.considerOverlaps.length = this.amount_floor.value
    this.hidden.fill(false)
    this.considerInnerWallsCalc.fill(false)
    this.considerOpenings.fill(false)
    this.considerOverlaps.fill(false)
  }

  get amount_floor() {
    return (this.formFrame.controls["amount_floor"] as FormControl)
  }

  get floor_number() {
    return this.formFrame.controls["floor_number"] as FormArray
  }

  apertures(index: number) {
    return this.formFrame.controls["floor_number"].controls[index].controls['apertures'] as FormArray
  }

  // windowsParams(index: number) {
  //   return this.formFrame.controls["floor_number"].controls[index].controls.openings.controls["windowsParams"] as FormArray
  // }
  // externalDoorsParams(index: number) {
  //   return this.formFrame.controls["floor_number"].controls[index].controls.openings.controls["externalDoorsParams"] as FormArray
  // }
  // internalDoorsParams(index: number) {
  //   return this.formFrame.controls["floor_number"].controls[index].controls.openings.controls["internalDoorsParams"] as FormArray
  // }

  addFloor() {
    const floorForm = this.fb.group({
      floor_height: ['', Validators.required],
      perimeter_of_external_walls: ['', Validators.required],
      base_area: ['', Validators.required],
      external_wall_thickness: ['', Validators.required],
      internal_wall_length: ['', Validators.required],
      internal_wall_thickness: ['', Validators.required],

      OSB_external_wall: ['', Validators.required],
      steam_waterproofing_external_wall: ['', Validators.required],
      windscreen_external_wall: ['', Validators.required],
      insulation_external_wall: ['', Validators.required],

      OSB_internal_wall: ['', Validators.required],

      apertures: this.fb.array([
        this.fb.group({
          id: this.fb.group({
            frameId: [null],
            apertureId: [null],
          }),
          amount: ['', Validators.required],
          aperture: this.fb.group({
            id: [null],
            type: ['', Validators.required],
            height: ['', Validators.required],
            width: ['', Validators.required]
          })
        })
      ]),

      overlap_thickness: [null, Validators.required],
      OSB_thickness: ['', Validators.required],
      steam_waterproofing_thickness: ['', Validators.required],
      windscreen_thickness: ['', Validators.required],
      insulation_thickness: ['', Validators.required]
    })

    if(this.amount_floor.valid) {
      if (this.amount_floor.value > this.floor_number.length) {
        this.hidden.length = this.amount_floor.value
        this.considerInnerWallsCalc.length = this.amount_floor.value
        this.considerOpenings.length = this.amount_floor.value
        this.considerOverlaps.length = this.amount_floor.value
        for (let i = this.floor_number.length; i < this.amount_floor.value; i++) {
          this.floor_number.push(floorForm)
          this.hidden[i] = false
          this.considerInnerWallsCalc[i] = false
          this.considerOpenings[i] = false
          this.considerOverlaps[i] = false
        }
      }
      else {
        this.hidden.length = this.amount_floor.value
        this.considerInnerWallsCalc.length = this.amount_floor.value
        this.considerOpenings.length = this.amount_floor.value
        this.considerOverlaps.length = this.amount_floor.value
        for (let i = this.floor_number.length; i > this.amount_floor.value; i--) {
          this.deleteFloor(i-1)
        }
      }
    }
  }
  deleteFloor(floorIndex: number) {
    for (let i = this.apertures(floorIndex).length; i > 1; i--) {
      this.deleteApertures(floorIndex, i-1)
    }
    this.floor_number.removeAt(floorIndex)
    this.hidden.length = this.amount_floor.value
    this.considerInnerWallsCalc.length = this.amount_floor.value
    this.considerOpenings.length = this.amount_floor.value
    this.considerOverlaps.length = this.amount_floor.value
  }

  addApertures(index: number) {
    const apertures = this.fb.group({
      id: this.fb.group({
        frameId: [null],
        apertureId: [null],
      }),
      amount: ['', Validators.required],
      aperture: this.fb.group({
        id: [null],
        type: ['', Validators.required],
        height: ['', Validators.required],
        width: ['', Validators.required]
      })
    })
    this.apertures(index).push(apertures)
  }
  deleteApertures(index: number, indexAperture: number) {
    this.apertures(index).removeAt(indexAperture)
  }

  clearCalculation() {
    for (let i = this.apertures(0).length; i > 1; i--) {
      this.deleteApertures(0, i-1)
    }
    for (let i = this.floor_number.length; i > 1; i--) {
      this.deleteFloor(i-1)
    }
    this.hidden.length = this.amount_floor.value
    this.considerInnerWallsCalc.length = this.amount_floor.value
    this.considerOpenings.length = this.amount_floor.value
    this.considerOverlaps.length = this.amount_floor.value
    this.formFrame.reset()
    this.formFrame.controls['amount_floor'].value = 1
  }

  clearOSBInternal(index: number) {
    this.formFrame.controls["floor_number"].controls[index].controls['OSB_internal_wall'].reset('')
  }
  clearApertures(index: number) {
    for (let i = this.apertures(index).length; i > 1; i--) {
      this.deleteApertures(index, i-1)
    }
    this.formFrame.controls["floor_number"].controls[index].controls['apertures'].reset('')
  }
  clearOverlaps(index: number) {
    this.formFrame.controls["floor_number"].controls[index].controls['overlap_thickness'].reset('')
    this.formFrame.controls["floor_number"].controls[index].controls['OSB_thickness'].reset('')
    this.formFrame.controls["floor_number"].controls[index].controls['steam_waterproofing_thickness'].reset('')
    this.formFrame.controls["floor_number"].controls[index].controls['windscreen_thickness'].reset('')
    this.formFrame.controls["floor_number"].controls[index].controls['insulation_thickness'].reset('')
  }


  hide(i: number) {
    this.hidden[i] = true
  }

  decAmountFloor() {
    if (this.formFrame.controls['amount_floor'].value > 1) {
      this.hidden.length = this.amount_floor.value
      this.considerInnerWallsCalc.length = this.amount_floor.value
      this.considerOpenings.length = this.amount_floor.value
      this.considerOverlaps.length = this.amount_floor.value
      this.deleteFloor(--this.formFrame.controls['amount_floor'].value)
    }
  }
  incAmountFloor() {
    const floorForm = this.fb.group({
      floor_height: ['', Validators.required],
      perimeter_of_external_walls: ['', Validators.required],
      base_area: ['', Validators.required],
      external_wall_thickness: ['', Validators.required],
      internal_wall_length: ['', Validators.required],
      internal_wall_thickness: ['', Validators.required],

      OSB_external_wall: ['', Validators.required],
      steam_waterproofing_external_wall: ['', Validators.required],
      windscreen_external_wall: ['', Validators.required],
      insulation_external_wall: ['', Validators.required],

      OSB_internal_wall: ['', Validators.required],

      apertures: this.fb.array([
        this.fb.group({
          id: this.fb.group({
            frameId: [null],
            apertureId: [null],
          }),
          amount: ['', Validators.required],
          aperture: this.fb.group({
            id: [null],
            type: ['', Validators.required],
            height: ['', Validators.required],
            width: ['', Validators.required]
          })
        })
      ]),

      overlap_thickness: [null, Validators.required],
      OSB_thickness: ['', Validators.required],
      steam_waterproofing_thickness: ['', Validators.required],
      windscreen_thickness: ['', Validators.required],
      insulation_thickness: ['', Validators.required]
    })
    this.formFrame.controls['amount_floor'].value++;
    this.hidden.length = this.amount_floor.value
    this.considerInnerWallsCalc.length = this.amount_floor.value
    this.considerOpenings.length = this.amount_floor.value
    this.considerOverlaps.length = this.amount_floor.value
    this.hidden[this.amount_floor.value - 1] = false
    this.considerInnerWallsCalc[this.amount_floor.value - 1] = false
    this.considerOpenings[this.amount_floor.value - 1] = false
    this.considerOverlaps[this.amount_floor.value - 1] = false
    this.floor_number.push(floorForm)
  }

  decreaseVal() {
    this.formFrame.controls['amount_floor'].value--
  }

  submit() {
      const newFrameData = {...this.formFrame.value}
      console.log(JSON.stringify(newFrameData))
    // if(this.formFrame.valid) {
    //   this.formFrame.reset()
    // }

  }

  showAF(i: number, j: number) {
    console.log(String(i), ',', String(j), ':',this.formFrame.controls['floor_number'].controls[i].controls['openings'].controls['windowsParams'].controls[j])
  }
}

// openings: this.fb.group({
//   id: [null],
//   structural_element_frame_id: [null],
//   openings_id: [null],
//   windowsParams: this.fb.array([
//     this.fb.group({
//       id: [null],
//       height: ['', Validators.required],
//       width: ['', Validators.required],
//       amount: ['', Validators.required],
//       type: ['Оконные проемы']
//     })
//   ]),
//   externalDoorsParams: this.fb.array([
//     this.fb.group({
//       id: [null],
//       height: ['', Validators.required],
//       width: ['', Validators.required],
//       amount: ['', Validators.required],
//       type: ['Дверные проемы внешние']
//     })
//   ]),
//   internalDoorsParams: this.fb.array([
//     this.fb.group({
//       id: [null],
//       height: ['', Validators.required],
//       width: ['', Validators.required],
//       amount: ['', Validators.required],
//       type: ['Дверные проемы внутренние']
//     })
//   ]),
// }),

// addWindows(index: number) {
//   const controlsHWA = this.fb.group({
//     id: [null],
//     height: ['', Validators.required],
//     width: ['', Validators.required],
//     amount: ['', Validators.required]
//   })
//   // console.log('1', this.formFrame.controls["floor_number"].controls[1].controls.openings.controls["windowsParams"])
//   this.windowsParams(index).push(controlsHWA)
// }
// deleteWindows(index: number) {
//   this.windowsParams(index).removeAt(this.windowsParams(index).length-1)
// }
//
// addExternalDoors(index: number) {
//   const controlsHWA = this.fb.group({
//     id: [null],
//     height: ['', Validators.required],
//     width: ['', Validators.required],
//     amount: ['', Validators.required]
//   })
//   this.externalDoorsParams(index).push(controlsHWA)
// }
// deleteExternalDoors(index: number) {
//   this.externalDoorsParams(index).removeAt(this.externalDoorsParams(index).length-1)
// }
//
// addInnerDoors(index: number) {
//   const controlsHWA = this.fb.group({
//     id: [null],
//     height: ['', Validators.required],
//     width: ['', Validators.required],
//     amount: ['', Validators.required]
//   })
//   this.internalDoorsParams(index).push(controlsHWA)
// }
// deleteInnerDoors(index: number) {
//   this.internalDoorsParams(index).removeAt(this.internalDoorsParams(index).length-1)
// }