
export default function createTime(req, res) {
    if (req.method !== 'POST') {
     res.status(500).json({message: 'Only accepts Post, create time only'})
    }
    res.json({time: minutes, })
}