const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Initialize Supabase client
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Insert data into Supabase
        const { data, error } = await supabase
            .from('contact_messages')
            .insert([
                { name, email, message }
            ]);

        if (error) throw error;

        res.json({ success: true, data });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to submit message' 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});