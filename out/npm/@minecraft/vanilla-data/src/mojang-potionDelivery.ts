// Vanilla Data for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
//                 Raphael Landaverde <https://github.com/rlandav>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */

/**
 * All possible MinecraftPotionDeliveryTypes
 */
export enum MinecraftPotionDeliveryTypes {
    Consume = 'Consume',
    ThrownLingering = 'ThrownLingering',
    ThrownSplash = 'ThrownSplash',
}

/**
 * Union type equivalent of the MinecraftPotionDeliveryTypes enum.
 */
export type MinecraftPotionDeliveryTypesUnion = keyof typeof MinecraftPotionDeliveryTypes;
