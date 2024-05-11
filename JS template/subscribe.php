<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email address from the form
    $email = $_POST["email"];

    // Validate the email address (you can use PHP's built-in filter_var function for more thorough validation)

    // Send the email
    $to = $email;
    $subject = "Thank you for subscribing!";
    $message = "Hello,\n\nThank you for subscribing to our newsletter!";
    $headers = "From: your-email@example.com"; // Change this to your email address

    // Use PHP's mail function to send the email
    mail($to, $subject, $message, $headers);

    // Optionally, you can redirect the user to a thank you page
    header("Location: thank-you.html");
    exit;
}
?>
