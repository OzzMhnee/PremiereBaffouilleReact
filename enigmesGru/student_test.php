<?php


class student {
    public string $name;
    public int $age;
    public array $grades;

    public function __construct(string $name, int $age, array $grades) {
        $this->name = $name;
        $this->age = $age;
        // floatval : pour typer les valeurs du array
        $this->grades = array_map('floatval', $grades);
    }
}

class Utils {
    public static function getAverage(student $student): float {
        return !empty($student->grades) ? (array_sum($student->grades) / count($student->grades)) : 0.0;
    }

    public static function getMention (student $student): string {
        $average = self::getAverage($student);
        if ($average >=17) {
            return 'Excellent';
        } elseif ($average >= 14) {
            return 'Well done';
        } elseif ($average >= 10) {
            return 'Passable';
        } else {
            return 'Bulleur';
        }
    }

    public static function isAdult(student $student): bool {
        return $student->age >= 18;
    }

    public static function display(student $student): void {
        echo 'Nom : ' . $student->name . PHP_EOL;
        echo 'Âge : ' . $student->age . PHP_EOL;
        echo 'Notes : ' . implode(',', $student->grades) . PHP_EOL;
        echo 'Moyenne : ' . number_format(self::getAverage($student), 2) . PHP_EOL;
        echo 'Mention : ' . self::getMention($student) . PHP_EOL;
        echo 'Statut : ' . (self::isAdult($student) ?'Adulte':'Mineur') . PHP_EOL;
    }

    public static function loadStudents(): array {
        return [
            new student("Alice", 20, [15,18,12,14]),
            new student('Bob', 17, [10,8,9,11]),
            new student('Charlie',22, [20,19,18,20]),
            new student('Diane', 19, [12,14,16,13]),
            new student('Eve', 16, [7,6,5,8]),
        ];
    }

    public static function displayAll(): void {
        foreach (self::loadStudents() as $student) {
            echo "*********************" .PHP_EOL;
            self::display($student);
        }
    }
}

Utils::displayAll();