#File.write("secondfile.txt", "Testing Testing 1 2 3")
#Basic knowledge of creating and putting text into a new txt file

puts "Please enter the name of the student: "
name = gets

puts "Please enter the name of the assignment: "
assignment = gets

puts "Please provide the grade percentage you received: "
grade = gets

numGrade = grade.to_i

if numGrade < 60
    letterGrade = "F"
    puts name,
    assignment,
    "Grade: " + letterGrade,
    "The assignment was missing all of the required functionality."
elsif numGrade >= 60 and numGrade <= 69
    letterGrade = "D"
    puts name,
    assignment,
    "Grade: " + letterGrade,
    "The assignment was missing most of the required functionality."
elsif numGrade >= 70 and numGrade <= 79
    letterGrade = "C"
    puts name,
    assignment,
    "Grade: " + letterGrade,
    "The assignment was missing some of the required functionality."
elsif numGrade >= 80 and numGrade <= 89
    letterGrade = "B"
    puts name,
    assignment,
    "Grade: " + letterGrade,
    "The assignment was missing a little of the required functionality."
elsif numGrade >= 90 and numGrade <= 100
    letterGrade = "A"
    puts name,
    assignment,
    "Grade: " + letterGrade,
    "The assignment was missing none of the required functionality."
end