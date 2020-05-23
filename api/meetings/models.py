from __future__ import unicode_literals 
import uuid 
from django.db import models
from django.utils.formats import get_format

from django.contrib.gis.db import models
from simple_history.models import HistoricalRecords
from django.core.validators import MaxValueValidator, MinValueValidator

from api.helpers import PathAndRename

from notes.models import Note
from users.models import CustomUser

class Meeting(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

    active = models.BooleanField(default=False)
    complete = models.BooleanField(default=False)

    MEETING_MEDIUM_TYPE = [

        ('PH', 'Phone'),   
        ('PY', 'Physical'),   
        ('VD', 'Video'),   

        ('NA', 'Not Available'),   
    ]

    meeting_medium_type = models.CharField(
        max_length=2,
        choices=MEETING_MEDIUM_TYPE,
        default='NA',
    )      

    notes = models.ManyToManyField(Note)

    history = HistoricalRecords()

    def __str__(self):
        return self.name



class MeetingInvitation(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255) 

    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE, null=True)

    invitor = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, related_name='invitor')
    invitee = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, related_name='invitee')

    history = HistoricalRecords()

    def __str__(self):
        return self.name



