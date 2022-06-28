import urllib.request
from google.cloud import storage

def upload_to_bucket(self):

    urllib.request.urlretrieve("https://raw.githubusercontent.com/HDRUK/gw-api-widget/master/jest.config.js", "/tmp/jest.config.js")

    client = storage.Client()

    bucket = client.get_bucket('hdruk-gateway_datause_widget_uat')
    blob = bucket.blob('jest.config.js')
    blob.upload_from_filename('/tmp/jest.config.js')