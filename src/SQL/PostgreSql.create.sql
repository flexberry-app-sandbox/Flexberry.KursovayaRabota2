﻿




CREATE TABLE СпрСтуд (
 primaryKey UUID NOT NULL,
 Фио VARCHAR(255) NULL,
 Группа UUID NOT NULL,
 Дисциплина UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Группа (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрСотр (
 primaryKey UUID NOT NULL,
 Фио VARCHAR(255) NULL,
 Должность UUID NOT NULL,
 Группа UUID NOT NULL,
 Дисциплина UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Дисциплина (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE СпрСтуд ADD CONSTRAINT FKee1310139ebd5d81f59adc76b6b0883b2219c54c FOREIGN KEY (Группа) REFERENCES Группа; 
CREATE INDEX Indexee1310139ebd5d81f59adc76b6b0883b2219c54c on СпрСтуд (Группа); 

 ALTER TABLE СпрСтуд ADD CONSTRAINT FK51f55bae9df474a3e307ea29af8f1afc78c842f0 FOREIGN KEY (Дисциплина) REFERENCES Дисциплина; 
CREATE INDEX Index51f55bae9df474a3e307ea29af8f1afc78c842f0 on СпрСтуд (Дисциплина); 

 ALTER TABLE СпрСотр ADD CONSTRAINT FKbe29fc5faf6ab74145e14ce31f47c9c143da3eef FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Indexbe29fc5faf6ab74145e14ce31f47c9c143da3eef on СпрСотр (Должность); 

 ALTER TABLE СпрСотр ADD CONSTRAINT FK87936edfa67716eb6080c2c9b1824f5a8c142394 FOREIGN KEY (Группа) REFERENCES Группа; 
CREATE INDEX Index87936edfa67716eb6080c2c9b1824f5a8c142394 on СпрСотр (Группа); 

 ALTER TABLE СпрСотр ADD CONSTRAINT FK48555c07303e0741ac2160279b81c63531c0cdd3 FOREIGN KEY (Дисциплина) REFERENCES Дисциплина; 
CREATE INDEX Index48555c07303e0741ac2160279b81c63531c0cdd3 on СпрСотр (Дисциплина); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

