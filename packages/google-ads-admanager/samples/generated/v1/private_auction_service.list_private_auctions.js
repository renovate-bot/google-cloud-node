// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START admanager_v1_generated_PrivateAuctionService_ListPrivateAuctions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of PrivateAuctions.
   *  Format: `networks/{network_code}`
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of `PrivateAuctions` to return. The service
   *  may return fewer than this value. If unspecified, at most 50
   *  `PrivateAuctions` will be returned. The maximum value is 1000;
   *  values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous `ListPrivateAuctions`
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  `ListPrivateAuctions` must match the call that provided the
   *  page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. Expression to filter the response.
   *  See syntax details at
   *  https://developers.google.com/ad-manager/api/beta/filters
   */
  // const filter = 'abc123'
  /**
   *  Optional. Expression to specify sorting order.
   *  See syntax details at
   *  https://developers.google.com/ad-manager/api/beta/filters#order
   */
  // const orderBy = 'abc123'
  /**
   *  Optional. Number of individual resources to skip while paginating.
   */
  // const skip = 1234

  // Imports the Admanager library
  const {PrivateAuctionServiceClient} = require('@google-ads/admanager').v1;

  // Instantiates a client
  const admanagerClient = new PrivateAuctionServiceClient();

  async function callListPrivateAuctions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = admanagerClient.listPrivateAuctionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListPrivateAuctions();
  // [END admanager_v1_generated_PrivateAuctionService_ListPrivateAuctions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
