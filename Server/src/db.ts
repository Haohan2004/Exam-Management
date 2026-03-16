import redis from 'redis'
export const client = redis.createClient({
    url:'redis://default:lbubUkc5VV9KD3yGg8CKwUZAjVRK5IA4@redis-12739.c240.us-east-1-3.ec2.cloud.redislabs.com:12739',
})