# Generated by Django 4.2.3 on 2023-08-18 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0017_alter_produto_preco'),
    ]

    operations = [
        migrations.AddField(
            model_name='produto',
            name='quant_inscritos',
            field=models.IntegerField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='produto',
            name='porcentagem_comissao',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=4, null=True),
        ),
    ]
