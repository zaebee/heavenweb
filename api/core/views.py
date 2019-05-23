# core/views.py

import logging
from django.contrib.auth import get_user_model
from rest_framework import viewsets

from rest_framework.mixins import CreateModelMixin

from .serializers import UserSerializer, DialogSerializer
from .models import Post, DialogFlow


class CreateUserView(CreateModelMixin, viewsets.GenericViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class DialogsViewSet(viewsets.ModelViewSet):

    serializer_class = DialogSerializer
    queryset = DialogFlow.objects.all()
