// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// Enabling USE_MOCK_DATA will not require an eCommerce demo Backend (see serverless\README.md)
export const USE_MOCK_DATA = false;

// API endpoint for retrieving the products list
export const GET_PRODUCTS_API = process.env.REACT_APP_PRODUCTS_API;

// Default video stream to play inside the video player
// Replace this with your own Amazon IVS Playback URL
export const DEFAULT_VIDEO_STREAM = process.env.REACT_APP_VIDEO_STREAM_URL;