#!/bin/bash

# Fetch and process the JSON configuration file
CONFIG_URL="https://raw.githubusercontent.com/ibp-network/config/main/services.json"
METADATA_DIR="metadata"

# Create metadata directory if it doesn't exist
mkdir -p $METADATA_DIR

# Fetch the JSON configuration
json_data=$(curl -s $CONFIG_URL)

# Check if the curl command was successful
if [[ $? -ne 0 ]]; then
    echo "Error: Failed to fetch the configuration file."
    exit 1
fi

# Print the fetched JSON data for debugging
echo "Fetched JSON data:"
echo "$json_data"

# Check if the JSON file is valid
if ! echo "$json_data" | jq empty > /dev/null 2>&1; then
    echo "Error: Invalid JSON data."
    echo "$json_data"  # Output the content for debugging
    exit 1
fi

# Extract and process the endpoints
process_endpoints() {
    local service_key=$1
    echo "Processing service key: $service_key"

    # Extract endpoints using jq
    local endpoints=$(echo "$json_data" | jq -r --arg key "$service_key" '.[$key].endpoints | to_entries[] | @base64')

    if [[ -z "$endpoints" ]]; then
        echo "Error: No endpoints found for $service_key."
        return
    fi

    for endpoint in $endpoints; do
        _jq() {
            echo ${endpoint} | base64 --decode | jq -r ${1}
        }
        local name=$(_jq '.key' | tr -d '\n')
        local url=$(_jq '.value' | tr -d '\n')
        echo "Generating metadata for $name at $url"
        subxt metadata -f bytes --url $url > "${METADATA_DIR}/${name}.scale"
    done
}

# Process endpoints for rpc.ibp.network
process_endpoints "rpc.ibp.network"

# Process endpoints for sys.ibp.network
process_endpoints "sys.ibp.network"

echo "Metadata generation complete."

