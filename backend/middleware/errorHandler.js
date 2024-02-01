const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404).json({error: 'Not Found'});
    next(error);
}
const errorHandler = (err, req, res, next) => {
    let statusCode= res.statusCode === 200 ? 500: res.statusCode;
    let message = err.message;
    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        message = `Resource not found with ID :${err.value}`;
        statusCode = 404;
    }
    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "production" ? {} : err.stack,
    });
};
export {errorHandler, notFound};