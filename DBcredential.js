DB DETAILS:

postgres DB URL – https://phppgadmin-postgres-app-dataanalytic.run.aws-usw02-pr.ice.predix.io

System-Provided:
{
"VCAP_SERVICES": {
  "postgres": [
   {
    "credentials": {
     "ID": 0,
     "binding_id": "61116ead-0abc-4ee3-b3b9-0fc939e5833a",
     "database": "d8a89bb58eadd4d3a9cb3b71a74ed7234",
     "dsn": "host=10.72.6.143 port=5432 user=uac86060678024e388bdaa7b47bc44c31 password=9acae6c449a54715860bf6bef2ad826c dbname=d8a89bb5
     "host": "10.72.6.143",
     "instance_id": "cbe31bad-cc7d-4d19-ad81-a7ac6a882651",
     "jdbc_uri": "jdbc:postgresql://10.72.6.143:5432/d8a89bb58eadd4d3a9cb3b71a74ed7234?user=uac86060678024e388bdaa7b47bc44c31\u0026passw
     "password": "9acae6c449a54715860bf6bef2ad826c",
     "port": "5432",
     "uri": "postgres://uac86060678024e388bdaa7b47bc44c31:9acae6c449a54715860bf6bef2ad826c@10.72.6.143:5432/d8a89bb58eadd4d3a9cb3b71a74e
     "username": "uac86060678024e388bdaa7b47bc44c31"
    },
    "label": "postgres",
    "name": "postgres-db-service-instance-DataAnalytic",
    "plan": "shared-nr",
    "provider": null,
    "syslog_drain_url": null,
    "tags": [
     "rdpg",
     "postgresql"
    ],
    "volume_mounts": []
   }
  ]
}
}

{
"VCAP_APPLICATION": {
  "application_id": "86ca9512-3c83-4cca-8b7d-831766863a11",
  "application_name": "phppgadmin_Postgres-app-DataAnalytic",
  "application_uris": [
   "phppgadmin-postgres-app-dataanalytic.run.aws-usw02-pr.ice.predix.io"
  ],
  "application_version": "2f2f34ad-9537-4040-ac45-6bd4f70b4a9a",
  "limits": {
   "disk": 1024,
   "fds": 16384,
   "mem": 512
  },
  "name": "phppgadmin_Postgres-app-DataAnalytic",
  "space_id": "cc757c8a-b93f-457b-acc1-cf97024172d0",
  "space_name": "dev",
  "uris": [
   "phppgadmin-postgres-app-dataanalytic.run.aws-usw02-pr.ice.predix.io"
  ],
  "users": null,
  "version": "2f2f34ad-9537-4040-ac45-6bd4f70b4a9a"
}
}



From: Bhanumati Das 
Sent: Tuesday, June 13, 2017 1:33 PM
To: Ananta Prasad Ojha
Cc: Ajaya Kumar Swain
Subject: Data Analytic details

Hi Ananta,

These are the below details for Data & Analytic POC

UI Code : https://github.com/predixPoc/LatestPocs/blob/master/Data-Analytics-master_13_june_2017.zip

Service Code : https://github.com/predixPoc/LatestPocs/blob/master/Data-Analytic_svc-master.zip

Predix account Id: predix2.ajaya@gmail.com
Pwd: SEp@2017

Please let me know if you find any issue.


Thanks,
Bhanu
