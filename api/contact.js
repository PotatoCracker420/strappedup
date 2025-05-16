import { submitContactForm } from '../lib/contact'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const result = await submitContactForm(req.body)
        if (result.success) {
            res.status(200).json(result)
        } else {
            res.status(400).json(result)
        }
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server error' })
    }
}