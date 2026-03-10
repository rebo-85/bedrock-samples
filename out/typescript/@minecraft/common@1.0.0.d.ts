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
 *   "version": "1.0.0"
 * }
 * ```
 *
 */
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
export class InvalidArgumentError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly index: number;
}
