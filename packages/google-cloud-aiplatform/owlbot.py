# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""This script is used to synthesize generated parts of this library."""

import synthtool.languages.node_mono_repo as node
import logging

logging.basicConfig(level=logging.DEBUG)

# List of excludes for the enhanced library
node.owlbot_main(relative_dir="packages/google-cloud-aiplatform",
    staging_excludes = [
        "package.json",
        "README.md",
        "src/decorator.ts",
        "src/enhanced-types.json",
        "src/helpers.ts",
        "src/index.ts",
        "src/value-converter.ts",
        "test/helpers.test.ts",
        "test/index.test.ts",
        "tsconfig.json",
    ],
    templates_excludes=[
        "src/index.ts",
    ],
)
