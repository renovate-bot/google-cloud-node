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

function main(name, filter, interval, view) {
  // [START monitoring_v3_generated_MetricService_ListTimeSeries_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The
   *  project (https://cloud.google.com/monitoring/api/v3#project_name),
   *  organization or folder on which to execute the request. The format is:
   *      projects/[PROJECT_ID_OR_NUMBER]
   *      organizations/[ORGANIZATION_ID]
   *      folders/[FOLDER_ID]
   */
  // const name = 'abc123'
  /**
   *  Required. A monitoring
   *  filter (https://cloud.google.com/monitoring/api/v3/filters) that specifies
   *  which time series should be returned.  The filter must specify a single
   *  metric type, and can additionally specify metric labels and other
   *  information. For example:
   *      metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND
   *          metric.labels.instance_name = "my-instance-name"
   */
  // const filter = 'abc123'
  /**
   *  Required. The time interval for which results should be returned. Only time
   *  series that contain data points in the specified interval are included in
   *  the response.
   */
  // const interval = {}
  /**
   *  Specifies the alignment of data points in individual time series as
   *  well as how to combine the retrieved time series across specified labels.
   *  By default (if no `aggregation` is explicitly specified), the raw time
   *  series data is returned.
   */
  // const aggregation = {}
  /**
   *  Apply a second aggregation after `aggregation` is applied. May only be
   *  specified if `aggregation` is specified.
   */
  // const secondaryAggregation = {}
  /**
   *  Unsupported: must be left blank. The points in each time series are
   *  currently returned in reverse time order (most recent to oldest).
   */
  // const orderBy = 'abc123'
  /**
   *  Required. Specifies which information is returned about the time series.
   */
  // const view = {}
  /**
   *  A positive number that is the maximum number of results to return. If
   *  `page_size` is empty or more than 100,000 results, the effective
   *  `page_size` is 100,000 results. If `view` is set to `FULL`, this is the
   *  maximum number of `Points` returned. If `view` is set to `HEADERS`, this is
   *  the maximum number of `TimeSeries` returned.
   */
  // const pageSize = 1234
  /**
   *  If this field is not empty then it must contain the `nextPageToken` value
   *  returned by a previous call to this method.  Using this field causes the
   *  method to return additional results from the previous method call.
   */
  // const pageToken = 'abc123'

  // Imports the Monitoring library
  const {MetricServiceClient} = require('@google-cloud/monitoring').v3;

  // Instantiates a client
  const monitoringClient = new MetricServiceClient();

  async function callListTimeSeries() {
    // Construct request
    const request = {
      name,
      filter,
      interval,
      view,
    };

    // Run request
    const iterable = monitoringClient.listTimeSeriesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTimeSeries();
  // [END monitoring_v3_generated_MetricService_ListTimeSeries_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
