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
  // [START recommender_v1_generated_Recommender_ListRecommendations_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The container resource on which to execute the request.
   *  Acceptable formats:
   *  * `projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]`
   *  * `projects/[PROJECT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]`
   *  * `billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]`
   *  * `folders/[FOLDER_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]`
   *  * `organizations/[ORGANIZATION_ID]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]`
   *  LOCATION here refers to GCP Locations:
   *  https://cloud.google.com/about/locations/
   *  RECOMMENDER_ID refers to supported recommenders:
   *  https://cloud.google.com/recommender/docs/recommenders.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of results to return from this request.
   *  Non-positive values are ignored. If not specified, the server will
   *  determine the number of results to return.
   */
  // const pageSize = 1234
  /**
   *  Optional. If present, retrieves the next batch of results from the
   *  preceding call to this method. `page_token` must be the value of
   *  `next_page_token` from the previous response. The values of other method
   *  parameters must be identical to those in the previous call.
   */
  // const pageToken = 'abc123'
  /**
   *  Filter expression to restrict the recommendations returned. Supported
   *  filter fields:
   *  * `state_info.state`
   *  * `recommenderSubtype`
   *  * `priority`
   *  * `targetResources`
   *  Examples:
   *  * `stateInfo.state = ACTIVE OR stateInfo.state = DISMISSED`
   *  * `recommenderSubtype = REMOVE_ROLE OR recommenderSubtype = REPLACE_ROLE`
   *  * `priority = P1 OR priority = P2`
   *  * `targetResources :
   *  //compute.googleapis.com/projects/1234/zones/us-central1-a/instances/instance-1`
   *  * `stateInfo.state = ACTIVE AND (priority = P1 OR priority = P2)`
   *  The max allowed filter length is 500 characters.
   *  (These expressions are based on the filter language described at
   *  https://google.aip.dev/160)
   */
  // const filter = 'abc123'

  // Imports the Recommender library
  const {RecommenderClient} = require('@google-cloud/recommender').v1;

  // Instantiates a client
  const recommenderClient = new RecommenderClient();

  async function callListRecommendations() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = recommenderClient.listRecommendationsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListRecommendations();
  // [END recommender_v1_generated_Recommender_ListRecommendations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
