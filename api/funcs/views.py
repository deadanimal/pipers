import json

from django.http import JsonResponse
from django.shortcuts import render
from django.db.models import Q

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import viewsets, status
from rest_framework_extensions.mixins import NestedViewSetMixin


from django_filters.rest_framework import DjangoFilterBackend


from .models import (
    Func, 
)

from .serializers import (
    FuncSerializer, 
)

from .tasks import (
    contact_us_email
)


class FuncViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Func.objects.all()
    serializer_class = FuncSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)

    def get_permissions(self):
        permission_classes = [AllowAny] 

        return [permission() for permission in permission_classes]    

    
    def get_queryset(self):
        user = self.request.user
        queryset = Func.objects.none()

        return queryset  

    @action(methods=['POST'], detail=False)
    def contact_us(self, request, *args, **kwargs):        

        body_unicode =self.request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        contact_us_email(body['name'], body['email'])

        return Response(body)         

