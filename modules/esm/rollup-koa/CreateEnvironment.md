1. Create Virtual box and install debian
   1. `apt install samba mariadb-server ant openjdk-14-jre sudo build-essential git python3-distutils`
      1. We should make a version where we don't build from source.
   1. `apt remove xserver and task-desktop`
1. Setup Samba server
1. Install Go from Source
   1. Checkout 2 versions
       1. Main 
           1. `git clone https://github.com/golang/go go1.4`
           1. `git checkout release-branch.go1.4`
       1. Regular    
1. Install Node from Source
   1. Install Node-GYP from Source
1. Install Go-Ethereum From Source
1. Install IPFS from source   
1. Create MariaDB 
   1. https://mariadb.com/kb/en/configuring-mariadb-for-remote-client-access/
   1. `CREATE DATABASE SITE;`
   1. `CREATE SCHEMA JRG;`
   1. `CREATE TABLE PEOPLE (ID MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY, NAME VARCHAR(32) NOT NULL);`