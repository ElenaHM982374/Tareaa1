const logMiddleware = (req, res, next) => {
    console.log(`Middleware - Accessed: ${new Date().toLocaleString()}`);
    next();
};

module.exports = logMiddleware;