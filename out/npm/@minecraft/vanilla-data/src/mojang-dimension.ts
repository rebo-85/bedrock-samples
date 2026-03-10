// Vanilla Data for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
//                 Raphael Landaverde <https://github.com/rlandav>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */

/**
 * All possible MinecraftDimensionTypes
 */
export enum MinecraftDimensionTypes {
    Nether = 'minecraft:nether',
    Overworld = 'minecraft:overworld',
    TheEnd = 'minecraft:the_end',
}

/**
 * Union type equivalent of the MinecraftDimensionTypes enum.
 */
export type MinecraftDimensionTypesUnion = keyof typeof MinecraftDimensionTypes;
