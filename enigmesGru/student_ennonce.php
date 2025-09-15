<?php

// A simplifier / Optimiser / Sécuriser

class Student {
    public string $name;
    public int $age;
    public array $grades;

    public function __construct(string $name, int $age, array $grades) {
        $this->name = $name;
        $this->age = $age;
        $this->grades = $grades;
    }
}

class StudentUtils {

    public static function calculateAverage(Student $student): float {
        $sum = 0;
        $count = 0;
        for ($i = 0; $i < count($student->grades); $i++) {
            $sum += $student->grades[$i];
            $count++;
        }
        if ($count === 0) {
            return 0;
        } else {
            return $sum / $count;
        }
    }

    public static function getMention(Student $student): string {
        $average = self::calculateAverage($student);
        if ($average >= 90) {
            return "Excellent";
        } else if ($average >= 75) {
            return "Bien";
        } else if ($average >= 50) {
            return "Moyen";
        } else {
            return "Insuffisant";
        }
    }

    public static function isAdult(Student $student): bool {
        if ($student->age >= 18) {
            return true;
        } else {
            return false;
        }
    }

    public static function display(Student $student): void {
        echo "Nom : " . $student->name . PHP_EOL;
        echo "Âge : " . $student->age . PHP_EOL;
        echo "Notes : " . implode(", ", $student->grades) . PHP_EOL;
        echo "Moyenne : " . self::calculateAverage($student) . PHP_EOL;
        echo "Mention : " . self::getMention($student) . PHP_EOL;
        if (self::isAdult($student)) {
            echo "Statut : Adulte" . PHP_EOL;
        } else {
            echo "Statut : Mineur" . PHP_EOL;
        }
    }

    public static function loadStudents(): array {
        $students = [];

        $students[] = new Student("Alice", 20, [15, 18, 12, 14]);
        $students[] = new Student("Bob", 17, [10, 8, 9, 11]);
        $students[] = new Student("Charlie", 22, [20, 19, 18, 20]);
        $students[] = new Student("Diane", 19, [12, 14, 16, 13]);
        $students[] = new Student("Eve", 16, [7, 6, 5, 8]);

        return $students;
    }

    public static function displayAll(): void {
        $students = self::loadStudents();
        for ($i = 0; $i < count($students); $i++) {
            echo "====================" . PHP_EOL;
            self::display($students[$i]);
        }
    }
}

StudentUtils::displayAll();