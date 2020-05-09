from __future__ import unicode_literals 
import uuid 
from django.db import models
from django.utils.formats import get_format

from django.contrib.gis.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from api.helpers import PathAndRename


class Note(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

    NOTE_TYPE = [

        ('NA', 'Not Available'),   
    ]

    note_type = models.CharField(
        max_length=2,
        choices=NOTE_TYPE,
        default='NA',
    )  

    def __str__(self):
        return self.name


class NoteAttachment(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(blank=False, max_length=255)

    note = models.ForeignKey(Note, on_delete=models.CASCADE, null=True)
    attachment = models.FileField(upload_to=PathAndRename('piper/note-attachments'))

    NOTE_ATTACHMENT_TYPE = [

        ('NA', 'Not Available'),   
    ]

    note_attachment_type = models.CharField(
        max_length=2,
        choices=NOTE_ATTACHMENT_TYPE,
        default='NA',
    )  

    def __str__(self):
        return self.name
