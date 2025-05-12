<?php
// filepath: c:\Users\SnuzyPotato\YFF\strappedup\database.php

try {
    // Create or open the SQLite database
    $db = new PDO('sqlite:contact_form.db');

    // Create a table for storing contact form submissions
    $db->exec("CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    echo "Database and table created successfully.";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>