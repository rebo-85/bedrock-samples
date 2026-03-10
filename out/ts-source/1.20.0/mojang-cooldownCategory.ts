// Vanilla Data for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
//                 Raphael Landaverde <https://github.com/rlandav>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */

/**
 * All possible MinecraftCooldownCategoryTypes
 */
export enum MinecraftCooldownCategoryTypes {
    Chorusfruit = 'minecraft:chorusfruit',
    EnderPearl = 'minecraft:ender_pearl',
    GoatHorn = 'minecraft:goat_horn',
    Shield = 'minecraft:shield',
    Spear = 'minecraft:spear',
    WindCharge = 'minecraft:wind_charge',
}

/**
 * Union type equivalent of the MinecraftCooldownCategoryTypes enum.
 */
export type MinecraftCooldownCategoryTypesUnion = keyof typeof MinecraftCooldownCategoryTypes;
