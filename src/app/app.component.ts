import { Component, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public data: object[];
  @ViewChild('grid') public grid: GridComponent;

  public editSettings: Object;
  public toolbar: string[];
  public pageSettings: Object;
  public titleParam: Object;
  public genderParam: Object;
  public dobFormat: Object;

  public titleList: object[] = [
    { text: 'นาย', value: 'นาย' },
    { text: 'นางสาว', value: 'นางสาว' },
    { text: 'นาง', value: 'นาง' },
    { text: 'เด็กชาย', value: 'เด็กชาย' },
    { text: 'เด็กหญิง', value: 'เด็กหญิง' }
  ];

  public genderList: object[] = [
    { text: 'ชาย', value: 'ชาย' },
    { text: 'หญิง', value: 'หญิง' }
  ]

  public value = JSON.parse(localStorage.getItem("data")) || [];

  constructor() { }

  ngOnInit(): void {
    this.data = this.value;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = ['Add', 'Edit', 'Delete'];
    this.dobFormat = {
      params: { format: 'dd/MM/yyy' }
    }
    this.pageSettings = { pageCount: 10 };
    this.titleParam = {
      params: {
        dataSource: new DataManager(this.titleList),
        fields: { text: 'text', value: 'value' },
        query: new Query(),
        actionComplete: () => false,
        popupHeight: '300px'
      }
    }

    this.genderParam = {
      params: {
        dataSource: new DataManager(this.genderList),
        fields: { text: 'text', value: 'value' },
        query: new Query(),
        actionComplete: () => false,
        popupHeight: '300px'
      }
    }
  }

  save(event: any) {
    if (event.action === "edit") {
      this.data[event.rowIndex] = event?.data;
    }

    if (this.data.length > 0) {
      localStorage.setItem("data", JSON.stringify(this.data));
    } else {
      localStorage.removeItem("data");
    }
  }
}
