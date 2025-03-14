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
  // [START aiplatform_v1beta1_generated_MigrationService_SearchMigratableResources_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location that the migratable resources should be searched
   *  from. It's the Vertex AI location that the resources can be migrated to,
   *  not the resources' original location. Format:
   *  `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  The standard page size.
   *  The default and maximum value is 100.
   */
  // const pageSize = 1234
  /**
   *  The standard page token.
   */
  // const pageToken = 'abc123'
  /**
   *  A filter for your search. You can use the following types of filters:
   *  *   Resource type filters. The following strings filter for a specific type
   *      of
   *      MigratableResource google.cloud.aiplatform.v1beta1.MigratableResource:
   *      *   `ml_engine_model_version:*`
   *      *   `automl_model:*`
   *      *   `automl_dataset:*`
   *      *   `data_labeling_dataset:*`
   *  *   "Migrated or not" filters. The following strings filter for resources
   *      that either have or have not already been migrated:
   *      *   `last_migrate_time:*` filters for migrated resources.
   *      *   `NOT last_migrate_time:*` filters for not yet migrated resources.
   */
  // const filter = 'abc123'

  // Imports the Aiplatform library
  const {MigrationServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new MigrationServiceClient();

  async function callSearchMigratableResources() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = aiplatformClient.searchMigratableResourcesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchMigratableResources();
  // [END aiplatform_v1beta1_generated_MigrationService_SearchMigratableResources_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
