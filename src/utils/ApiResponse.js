class ApiResponse {
    constructor(statusCode, data = null, message = 'Success') {
        this.statusCode = statusCode; // HTTP status code
        this.data = data;            // Response payload (optional, defaults to null)
        this.message = message;      // Response message (defaults to 'Success')
        this.success = statusCode < 400; // Success if statusCode < 400
    }
}
