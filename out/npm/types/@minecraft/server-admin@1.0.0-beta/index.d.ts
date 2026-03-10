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
 *   "module_name": "@minecraft/server-admin",
 *   "version": "1.0.0-beta"
 * }
 * ```
 *
 */
import * as minecraftcommon from '@minecraft/common';
import * as minecraftserver from '@minecraft/server';
export class AdminBeforeEvents {
    private constructor();
    readonly asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal;
}

export class AsyncPlayerJoinBeforeEvent {
    private constructor();
    readonly name: string;
    readonly persistentId: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    allowJoin(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disallowJoin(reason?: string): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disconnect(reason?: string): void;
    isValid(): boolean;
}

export class AsyncPlayerJoinBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>,
    ): (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>;
    unsubscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>): boolean;
}

export class SecretString {
    constructor(value: string);
}

export class ServerSecrets {
    private constructor();
    readonly names: string[];
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    get(name: string): SecretString | undefined;
}

export class ServerVariables {
    private constructor();
    readonly names: string[];
    /**
     * @remarks
     * This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     */
    get(name: string): unknown | undefined;
}

export interface TransferPlayerIpPortOptions {
    hostname: string;
    port: number;
}

export interface TransferPlayerNetherNetOptions {
    netherNetId: string;
}

// @ts-ignore Class inheritance allowed for native defined classes
export class DisconnectedError extends Error {
    private constructor();
    /**
     * @remarks
     * This property can be read in early-execution mode.
     *
     */
    readonly id: string;
}

/**
 * @remarks
 * This function can't be called in restricted-execution mode.
 *
 * @throws This function can throw errors.
 */
export function transferPlayer(
    player: minecraftserver.Player,
    options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions,
): void;
export const beforeEvents: AdminBeforeEvents;
export const secrets: ServerSecrets;
export const variables: ServerVariables;
