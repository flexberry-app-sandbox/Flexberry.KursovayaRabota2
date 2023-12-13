



CREATE TABLE "СпрСтуд"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	"Группа" RAW(16) NOT NULL,

	"Дисциплина" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Группа"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПрикрепКн"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"СпрСотр" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СпрСотр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Фио" NVARCHAR2(255) NULL,

	"Группа" RAW(16) NOT NULL,

	"Дисциплина" RAW(16) NOT NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Материал"
(

	"primaryKey" RAW(16) NOT NULL,

	"Вид" NVARCHAR2(13) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Дисциплина" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "БазДан"
(

	"primaryKey" RAW(16) NOT NULL,

	"Время" DATE NULL,

	"Материал" RAW(16) NOT NULL,

	"СпрСтуд" RAW(16) NOT NULL,

	"ПрикрепКн" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Дисциплина"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "СпрСтуд"
	ADD CONSTRAINT "СпрСтуд_FГруппа_0" FOREIGN KEY ("Группа") REFERENCES "Группа" ("primaryKey");

CREATE INDEX "СпрСтуд_IГруппа" on "СпрСтуд" ("Группа");

ALTER TABLE "СпрСтуд"
	ADD CONSTRAINT "СпрСтуд_FДисц_9864" FOREIGN KEY ("Дисциплина") REFERENCES "Дисциплина" ("primaryKey");

CREATE INDEX "СпрСтуд_IДисц_2110" on "СпрСтуд" ("Дисциплина");

ALTER TABLE "ПрикрепКн"
	ADD CONSTRAINT "ПрикрепКн_FСп_7698" FOREIGN KEY ("СпрСотр") REFERENCES "СпрСотр" ("primaryKey");

CREATE INDEX "ПрикрепКн_IСп_1983" on "ПрикрепКн" ("СпрСотр");

ALTER TABLE "СпрСотр"
	ADD CONSTRAINT "СпрСотр_FГруппа_0" FOREIGN KEY ("Группа") REFERENCES "Группа" ("primaryKey");

CREATE INDEX "СпрСотр_IГруппа" on "СпрСотр" ("Группа");

ALTER TABLE "СпрСотр"
	ADD CONSTRAINT "СпрСотр_FДисц_5618" FOREIGN KEY ("Дисциплина") REFERENCES "Дисциплина" ("primaryKey");

CREATE INDEX "СпрСотр_IДисци_451" on "СпрСотр" ("Дисциплина");

ALTER TABLE "СпрСотр"
	ADD CONSTRAINT "СпрСотр_FДолж_1198" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "СпрСотр_IДолж_3774" on "СпрСотр" ("Должность");

ALTER TABLE "Материал"
	ADD CONSTRAINT "Материал_FДис_4309" FOREIGN KEY ("Дисциплина") REFERENCES "Дисциплина" ("primaryKey");

CREATE INDEX "Материал_IДис_4269" on "Материал" ("Дисциплина");

ALTER TABLE "БазДан"
	ADD CONSTRAINT "БазДан_FМатер_9242" FOREIGN KEY ("Материал") REFERENCES "Материал" ("primaryKey");

CREATE INDEX "БазДан_IМатериал" on "БазДан" ("Материал");

ALTER TABLE "БазДан"
	ADD CONSTRAINT "БазДан_FСпрСтуд_0" FOREIGN KEY ("СпрСтуд") REFERENCES "СпрСтуд" ("primaryKey");

CREATE INDEX "БазДан_IСпрСтуд" on "БазДан" ("СпрСтуд");

ALTER TABLE "БазДан"
	ADD CONSTRAINT "БазДан_FПрикр_6507" FOREIGN KEY ("ПрикрепКн") REFERENCES "ПрикрепКн" ("primaryKey");

CREATE INDEX "БазДан_IПрикр_1698" on "БазДан" ("ПрикрепКн");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


