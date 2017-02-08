/**
 * Created by yiwang on 2017/2/5.
 */
export const config = process.env === 'dev' ? {
        ENV: 'http://dev'
    } : {
        ENV: 'http://prod'
    };