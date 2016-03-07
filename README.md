USER STORIES: 


User Story: I can submit a FormData object that includes a file upload.


User Story: When I submit something, I will receive the file size in bytes within the JSON response


USAGE:

The user will select a file to upload on the html form.

The user will then click the 'upload' button.


RESPONSE:

If the file is valid and there are no other errors:

{"file_size":"12936 bytes"}


If there is an error:

{"error":"there was an error accepting your file or a valid file was never selected"}