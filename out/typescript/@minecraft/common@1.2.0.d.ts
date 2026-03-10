// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @packageDocumentation
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/common",
 *   "version": "1.2.0"
 * }
 * ```
 *
 */
export enum InvalidArgumentErrorType {
    Duplicate = 'Duplicate',
    Empty = 'Empty',
    Unknown = 'Unknown',
    Unspecified = 'Unspecified',
}

export interface NumberRange {
    max: number;
    min: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly index: number;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly maxValue?: number;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly minValue?: number;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly value?: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class EngineError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidArgumentError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly index: number;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly type: InvalidArgumentErrorType;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class PropertyOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly maxValue?: number;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly minValue?: number;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly value: number;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class RuntimeConditionError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class UnsupportedFunctionalityError extends Error {
    private constructor();
}
