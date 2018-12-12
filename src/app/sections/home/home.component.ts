import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

import {CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType} from '../../../lib';

@Component({
  selector: 'gridster-general',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  ngOnInit() {
    this.options = {
      gridType: "scrollVertical",
      compactType: CompactType.None,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      mobileBreakpoint: 640,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      pushItems: true,
      minRows: 3,
      draggable: {
        enabled: true,
        ignoreContent: true,
        dragHandleClass: 'drag-handler',
        start: (item, gridsterItem, event) => {
          item.resizing = true;
        },
        stop: (item, gridsterItem, event) => {
          item.resizing = false;   
        }
      },
      resizable: {
        enabled: true,
        start: (item, gridsterItem, event) => {
          item.resizing = true;
        },
        stop: (item, gridsterItem, event) => {
          item.resizing = false;   
        }
      }
    }
    // this.options = {
    //   gridType: GridType.ScrollVertical,
    //   compactType: CompactType.None,
    //   margin: 10,
    //   outerMargin: true,
    //   outerMarginTop: null,
    //   outerMarginRight: null,
    //   outerMarginBottom: null,
    //   outerMarginLeft: null,
    //   mobileBreakpoint: 640,
    //   minCols: 1,
    //   maxCols: 100,
    //   minRows: 1,
    //   maxRows: 100,
    //   maxItemCols: 100,
    //   minItemCols: 1,
    //   maxItemRows: 100,
    //   minItemRows: 1,
    //   maxItemArea: 2500,
    //   minItemArea: 1,
    //   defaultItemCols: 1,
    //   defaultItemRows: 1,
    //   fixedColWidth: 105,
    //   fixedRowHeight: 105,
    //   keepFixedHeightInMobile: false,
    //   keepFixedWidthInMobile: false,
    //   scrollSensitivity: 10,
    //   scrollSpeed: 20,
    //   enableEmptyCellClick: false,
    //   enableEmptyCellContextMenu: false,
    //   enableEmptyCellDrop: false,
    //   enableEmptyCellDrag: false,
    //   emptyCellDragMaxCols: 50,
    //   emptyCellDragMaxRows: 50,
    //   ignoreMarginInRow: false,
    //   draggable: {
    //     enabled: true,
    //   },
    //   resizable: {
    //     enabled: true,
    //   },
    //   swap: false,
    //   pushItems: true,
    //   disablePushOnDrag: false,
    //   disablePushOnResize: false,
    //   pushDirections: {north: true, east: true, south: true, west: true},
    //   pushResizeItems: false,
    //   displayGrid: DisplayGrid.Always,
    //   disableWindowResize: false,
    //   disableWarnings: false,
    //   scrollToNewItems: false
    // };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0, hasContent: true},
      {cols: 2, rows: 2, y: 0, x: 2, hasContent: true},
      {cols: 1, rows: 1, y: 0, x: 4, hasContent: true},
      {cols: 1, rows: 1, y: 2, x: 5, hasContent: true},
      {cols: 1, rows: 1, y: 2, x: 6, hasContent: true}
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({cols: 2, rows: 1, hasContent: true});
  }
}
