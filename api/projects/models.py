from __future__ import unicode_literals 
import uuid 
import datetime
from django.db import models
from django.utils.formats import get_format

from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from api.helpers import PathAndRename


from organisations.models import Organisation
from users.models import CustomUser


class Project(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

    PROJECT_TYPE = [

        ('NA', 'Not Available'),   
    ]

    project_type = models.CharField(
        max_length=2,
        choices=PROJECT_TYPE,
        default='NA',
    )  

    client = models.ForeignKey(Organisation, on_delete=models.CASCADE)

    creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    created_date = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.name

class ProjectMilestone(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)


class ProjectLog(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

class ProjectSoftwareModule(models.Model):

    PROJECT_WORK_TYPE = [

        ('NA', 'Not Available'),   
    ]

    project_work_type = models.CharField(
        max_length=2,
        choices=PROJECT_WORK_TYPE,
        default='NA',
    )          

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

class ProjectTradingModule(models.Model):

    PROJECT_WORK_TYPE = [

        ('NA', 'Not Available'),   
    ]

    project_work_type = models.CharField(
        max_length=2,
        choices=PROJECT_WORK_TYPE,
        default='NA',
    )          

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)    

class ProjectWorkModule(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)    

    PROJECT_WORK_TYPE = [

        ('NA', 'Not Available'),   
    ]

    project_work_type = models.CharField(
        max_length=2,
        choices=PROJECT_WORK_TYPE,
        default='NA',
    )      