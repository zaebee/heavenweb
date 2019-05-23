# core/serializers.py

from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import DialogFlow


class DialogSerializer(serializers.ModelSerializer):

    class Meta:
        model = DialogFlow


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()

    def create(self, validated_data):
        UserModel = get_user_model()
        user = UserModel(**validated_data)
        # Hash the user's password.
        user.set_password(validated_data['password'])
        user.save()
        return user
