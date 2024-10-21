-- SQL script to create airline database schema
CREATE TABLE Flights (
    flight_id INT PRIMARY KEY,
    flight_number VARCHAR(10) NOT NULL,
    departure_time DATETIME NOT NULL,
    arrival_time DATETIME NOT NULL,
    origin VARCHAR(50) NOT NULL,
    destination VARCHAR(50) NOT NULL
    -- Add other columns as needed
);

CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone_number VARCHAR(20)
    -- Add other columns as needed
);

CREATE TABLE Bookings (
    booking_id INT PRIMARY KEY,
    customer_id INT,
    flight_id INT,
    booking_date DATETIME NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (flight_id) REFERENCES Flights(flight_id)
    -- Add other columns as needed
);

CREATE TABLE Payments (
    payment_id INT PRIMARY KEY,
    booking_id INT,
    payment_amount DECIMAL(10, 2) NOT NULL,
    payment_date DATETIME NOT NULL,
    FOREIGN KEY (booking_id) REFERENCES Bookings(booking_id)
    -- Add other columns as needed
);
