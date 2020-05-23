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
    Note, 
    NoteAttachment,
    NoteChart,
    NoteItem
)

from .serializers import (
    NoteSerializer, 
    NoteAttachmentSerializer,
    NoteChartSerializer,
    NoteItemSerializer
)


class NoteViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Note.objects.all()
        return queryset  

          

class NoteAttachmentViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = NoteAttachment.objects.all()
    serializer_class = NoteAttachmentSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        return NoteAttachment.objects.filter(note__id=self.kwargs['parent_lookup_note'])

class NoteChartViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = NoteChart.objects.all()
    serializer_class = NoteChartSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        return NoteChart.objects.filter(note__id=self.kwargs['parent_lookup_note'])
      

class NoteItemViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = NoteItem.objects.all()
    serializer_class = NoteItemSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 
        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        return NoteItem.objects.filter(note__id=self.kwargs['parent_lookup_note'])                