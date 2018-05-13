/* Copies data from .csv file into the plant table */
-- SET search_path TO plants;
\COPY plants.plant(symbol,synonym,sci_name,common_name,family) FROM './plants.csv' DELIMITER ',' CSV HEADER

