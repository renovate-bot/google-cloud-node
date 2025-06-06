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
  // [START bigquerydatatransfer_v1_generated_DataTransferService_ListTransferRuns_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of transfer configuration for which transfer runs should be
   *  retrieved. Format of transfer configuration resource name is:
   *  `projects/{project_id}/transferConfigs/{config_id}` or
   *  `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`.
   */
  // const parent = 'abc123'
  /**
   *  When specified, only transfer runs with requested states are returned.
   */
  // const states = [1,2,3,4]
  /**
   *  Pagination token, which can be used to request a specific page
   *  of `ListTransferRunsRequest` list results. For multiple-page
   *  results, `ListTransferRunsResponse` outputs
   *  a `next_page` token, which can be used as the
   *  `page_token` value to request the next page of list results.
   */
  // const pageToken = 'abc123'
  /**
   *  Page size. The default page size is the maximum value of 1000 results.
   */
  // const pageSize = 1234
  /**
   *  Indicates how run attempts are to be pulled.
   */
  // const runAttempt = {}

  // Imports the Datatransfer library
  const {DataTransferServiceClient} = require('@google-cloud/bigquery-data-transfer').v1;

  // Instantiates a client
  const datatransferClient = new DataTransferServiceClient();

  async function callListTransferRuns() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = datatransferClient.listTransferRunsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTransferRuns();
  // [END bigquerydatatransfer_v1_generated_DataTransferService_ListTransferRuns_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
