awk -F"," 'BEGIN {print "\n\nvar pd = {"}\
           /Amsterdam|Haarlem|Heemstede|Badhoevedorp/ {print "\""$2"\":[\""$3"\",\""$1"\"],"}
           END {print "};"}' cvs-files/6pp_nh.csv > postalcode.js

