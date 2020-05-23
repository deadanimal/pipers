import datetime
import uuid
import tempfile

from django.http import JsonResponse
from django.shortcuts import render
from django.db.models import Q
from django.core.files.storage import default_storage
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin

from api.helpers import PathAndRename

from .models import (
    Submission, 
    SubmissionDocument,
    SubmissionTask
)

from .serializers import (
    SubmissionSerializer, 
    SubmissionDocumentSerializer,
    SubmissionTaskSerializer
)



class SubmissionViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Submission.objects.all()
        return queryset  

          

class SubmissionDocumentViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = SubmissionDocument.objects.all()
    serializer_class = SubmissionDocumentSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = SubmissionDocument.objects.filter(note__id=self.kwargs['parent_lookup_note'])
        return queryset  

class SubmissionTaskViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = SubmissionTask.objects.all()
    serializer_class = SubmissionTaskSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = SubmissionTask.objects.filter(note__id=self.kwargs['parent_lookup_note'])
        return queryset          