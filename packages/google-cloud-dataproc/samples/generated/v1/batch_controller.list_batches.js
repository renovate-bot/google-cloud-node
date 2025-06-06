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
  // [START dataproc_v1_generated_BatchController_ListBatches_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, which owns this collection of batches.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of batches to return in each response.
   *  The service may return fewer than this value.
   *  The default page size is 20; the maximum page size is 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token received from a previous `ListBatches` call.
   *  Provide this token to retrieve the subsequent page.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. A filter for the batches to return in the response.
   *  A filter is a logical expression constraining the values of various fields
   *  in each batch resource. Filters are case sensitive, and may contain
   *  multiple clauses combined with logical operators (AND/OR).
   *  Supported fields are `batch_id`, `batch_uuid`, `state`, and `create_time`.
   *  e.g. `state = RUNNING and create_time < "2023-01-01T00:00:00Z"`
   *  filters for batches in state RUNNING that were created before 2023-01-01
   *  See https://google.aip.dev/assets/misc/ebnf-filtering.txt for a detailed
   *  description of the filter syntax and a list of supported comparisons.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Field(s) on which to sort the list of batches.
   *  Currently the only supported sort orders are unspecified (empty) and
   *  `create_time desc` to sort by most recently created batches first.
   *  See https://google.aip.dev/132#ordering for more details.
   */
  // const orderBy = 'abc123'

  // Imports the Dataproc library
  const {BatchControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new BatchControllerClient();

  async function callListBatches() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = dataprocClient.listBatchesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListBatches();
  // [END dataproc_v1_generated_BatchController_ListBatches_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
