// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */
/**
 * @beta
 * @packageDocumentation
 *
 * Manifest Details
 * ```json
 * {
 *   "module_name": "@minecraft/debug-utilities",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
// @ts-ignore Class inheritance allowed for native defined classes
export class DebugArrow extends DebugLine {
    headLength: number;
    headRadius: number;
    /**
     * Bounds: [3, 128]
     */
    headSegments: number;
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        endLocation: minecraftserver.Vector3,
    );
}

// @ts-ignore Class inheritance allowed for native defined classes
export class DebugBox extends DebugShape {
    bound: minecraftserver.Vector3;
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

// @ts-ignore Class inheritance allowed for native defined classes
export class DebugCircle extends DebugShape {
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

export class DebugDrawer {
    private constructor();
    addShape(shape: DebugShape, dimension?: minecraftserver.Dimension): void;
    removeAll(): void;
    removeShape(shape: DebugShape): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class DebugLine extends DebugShape {
    endLocation: minecraftserver.Vector3;
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        endLocation: minecraftserver.Vector3,
    );
}

export class DebugShape {
    private constructor();
    attachedTo?: minecraftserver.Entity;
    color: minecraftserver.RGB;
    readonly dimension: minecraftserver.Dimension;
    readonly hasDuration: boolean;
    readonly location: minecraftserver.Vector3;
    rotation: minecraftserver.Vector3;
    scale: number;
    timeLeft?: number;
    readonly totalTimeLeft?: number;
    visibleTo: minecraftserver.Player[];
    remove(): void;
    setLocation(location: minecraftserver.DimensionLocation | minecraftserver.Vector3): void;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class DebugSphere extends DebugShape {
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

// @ts-ignore Class inheritance allowed for native defined classes
export class DebugText extends DebugShape {
    text: string;
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3, text: string);
}

export interface HandleCounts {
    handleCounts: Record<string, number>;
    name: string;
    packId: string;
    scriptModuleUUID: string;
}

export interface PluginStats {
    plugins: HandleCounts[];
}

export interface RuntimeStats {
    arrayCount: number;
    atomCount: number;
    atomSize: number;
    fastArrayCount: number;
    fastArrayElementCount: number;
    functionCodeSize: number;
    functionCount: number;
    functionLineCount: number;
    functionSize: number;
    memoryAllocatedCount: number;
    memoryAllocatedLimit: number;
    memoryAllocatedSize: number;
    memoryUsedCount: number;
    memoryUsedSize: number;
    objectCount: number;
    objectSize: number;
    propertyCount: number;
    propertySize: number;
    stringCount: number;
    stringSize: number;
}

export function collectPluginStats(): PluginStats;
export function collectRuntimeStats(): RuntimeStats;
/**
 * @throws This function can throw errors.
 */
export function disableWatchdogTimingWarnings(disable: boolean): void;
export const debugDrawer: DebugDrawer;
