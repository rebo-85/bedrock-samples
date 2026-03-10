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
 *   "module_name": "@minecraft/server",
 *   "version": "1.0.0"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
export class CommandResult {
    private constructor();
    readonly successCount: number;
}

export class Dimension {
    private constructor();
    readonly id: string;
    /**
     * @deprecated This function is deprecated and will be removed in 2.0.0.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

export class Entity {
    private constructor();
    readonly id: string;
    readonly typeId: string;
    /**
     * @deprecated This function is deprecated and will be removed in 2.0.0.
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
}

/**
 * @deprecated This class is deprecated and will be removed in 2.0.0.
 */
export class MinecraftDimensionTypes {
    private constructor();
    static readonly nether = 'minecraft:nether';
    static readonly overworld = 'minecraft:overworld';
    static readonly theEnd = 'minecraft:the_end';
}

// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly name: string;
}

export class System {
    private constructor();
    /**
     * @remarks
     * This function can be called in early-execution mode.
     *
     */
    run(callback: () => void): number;
}

export class World {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getAllPlayers(): Player[];
    /**
     * @throws This function can throw errors.
     */
    getDimension(dimensionId: string): Dimension;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class CommandError extends Error {
    private constructor();
}

// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly id: string;
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly type: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class RawMessageError extends Error {
    private constructor();
}

export const system: System;
export const world: World;
