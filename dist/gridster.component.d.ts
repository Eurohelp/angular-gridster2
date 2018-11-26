import { ChangeDetectorRef, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { GridsterConfig } from './gridsterConfig.interface';
import { GridsterEmptyCell } from './gridsterEmptyCell.service';
import { GridsterCompact } from './gridsterCompact.service';
import { GridsterConfigS } from './gridsterConfigS.interface';
import { GridsterItemS } from './gridsterItemS.interface';
import { GridsterComponentInterface } from './gridster.interface';
import { GridsterItemComponentInterface } from './gridsterItemComponent.interface';
import { GridsterRenderer } from './gridsterRenderer.service';
export declare class GridsterComponent implements OnInit, OnChanges, OnDestroy, GridsterComponentInterface {
    renderer: Renderer2;
    cdRef: ChangeDetectorRef;
    zone: NgZone;
    options: GridsterConfig;
    calculateLayoutDebounce: () => void;
    movingItem: GridsterItemS | null;
    previewStyle: () => void;
    el: any;
    $options: GridsterConfigS;
    mobile: boolean;
    curWidth: number;
    curHeight: number;
    grid: Array<GridsterItemComponentInterface>;
    columns: number;
    rows: number;
    curColWidth: number;
    minColWidth: number;
    curRowHeight: number;
    minRowHeight: number;
    gridColumns: never[];
    gridRows: never[];
    windowResize: (() => void) | null;
    dragInProgress: boolean;
    emptyCell: GridsterEmptyCell;
    compact: GridsterCompact;
    gridRenderer: GridsterRenderer;
    elemWidth: number;
    minColWidthAdd: number;
    numColumns: number;
    constructor(el: ElementRef, renderer: Renderer2, cdRef: ChangeDetectorRef, zone: NgZone);
    static checkCollisionTwoItems(mobile: boolean, item: GridsterItemS, item2: GridsterItemS): boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    resize(): void;
    setOptions(): void;
    optionsChanged(): void;
    ngOnDestroy(): void;
    onResize(): void;
    checkIfToResize(): boolean;
    setGridSize(): void;
    setGridDimensions(): void;
    calculateLayout(): void;
    updateGrid(): void;
    calculateColumns(): void;
    updateItems(): void;
    addItem(itemComponent: GridsterItemComponentInterface): void;
    removeItem(itemComponent: GridsterItemComponentInterface): void;
    checkCollision(item: GridsterItemS): GridsterItemComponentInterface | boolean;
    checkGridCollision(item: GridsterItemS): boolean;
    findItemWithItem(item: GridsterItemS): GridsterItemComponentInterface | boolean;
    findItemsWithItem(item: GridsterItemS): Array<GridsterItemComponentInterface>;
    autoPositionItem(itemComponent: GridsterItemComponentInterface): void;
    getNextPossiblePosition(newItem: GridsterItemS, startingFrom?: {
        y?: number;
        x?: number;
    }): boolean;
    getFirstPossiblePosition(item: GridsterItemS): GridsterItemS;
    getLastPossiblePosition(item: GridsterItemS): GridsterItemS;
    pixelsToPositionX(x: number, roundingMethod: Function, noLimit?: boolean): number;
    pixelsToPositionY(y: number, roundingMethod: Function, noLimit?: boolean): number;
    positionXToPixels(x: number): number;
    positionYToPixels(y: number): number;
}
