// Vanilla Data for Minecraft Bedrock Edition script APIs
// Project: https://docs.microsoft.com/minecraft/creator/
// Definitions by: Jake Shirley <https://github.com/JakeShirley>
//                 Mike Ammerlaan <https://github.com/mammerla>
//                 Raphael Landaverde <https://github.com/rlandav>

/* *****************************************************************************
   Copyright (c) Microsoft Corporation.
   ***************************************************************************** */

/**
 * All possible MinecraftCameraPresetsTypes
 */
export enum MinecraftCameraPresetsTypes {
    ControlSchemeCamera = 'minecraft:control_scheme_camera',
    FirstPerson = 'minecraft:first_person',
    FixedBoom = 'minecraft:fixed_boom',
    FollowOrbit = 'minecraft:follow_orbit',
    Free = 'minecraft:free',
    ThirdPerson = 'minecraft:third_person',
    ThirdPersonFront = 'minecraft:third_person_front',
}

/**
 * Union type equivalent of the MinecraftCameraPresetsTypes enum.
 */
export type MinecraftCameraPresetsTypesUnion = keyof typeof MinecraftCameraPresetsTypes;
